import express from "express";
import multer from "multer";
import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod"


const ats = express.Router();
const upload = multer({ dest: "uploads/" });

const gemini = google("gemini-2.0-flash");

    // ats Schema
    const Schema=z.object({
        matchRate: z.number().min(0).max(100),
  categories: z.object({
    Searchability: z.object({
      issues: z.number(),
      issueDetails: z.array(z.string()), 
      tips: z.array(z.string())
    }),
    HardSkills: z.object({
      issues: z.number(),
      issueDetails: z.array(z.string()), 
      tips: z.array(z.string())
    }),
    SoftSkills: z.object({
      issues: z.number(),
      issueDetails: z.array(z.string()),
      tips: z.array(z.string())
    }),
    RecruiterTips: z.object({
      issues: z.number(),
      issueDetails: z.array(z.string()), 
      tips: z.array(z.string())
    }),
    // Formatting: z.object({
    //   issues: z.number(),
    //   issueDetails: z.array(z.string()), 
    //   tips: z.array(z.string())
    // }),
  }),
  checks: z.array(z.object({
    title: z.string(),
    status: z.enum(["pass","fail","partial"]),
    message: z.string()
  })),
  keywords: z.array(z.string()).nonempty("At least one keyword is required"),
});


ats.post("/ats", upload.single("resume"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileExt = req.file.originalname.split(".").pop().toLowerCase();
    let text = "";

    if (fileExt === "pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      text = pdfData.text;
    } 
    else if (fileExt === "docx" || fileExt === "doc") {
      const docData = await mammoth.extractRawText({ path: filePath });
      text = docData.value;
    } 
    else {
      return res.status(400).json({ error: "Invalid file type" });
    }



   const result = await generateObject({
      model: gemini,
      schema: Schema,
      temperature: 0,
      prompt: `
      You are an ATS scoring engine. 
        Analyze this resume and return structured JSON with:
        - matchRate (0-100)
        - categories (Searchability, HardSkills, SoftSkills, RecruiterTips, Formatting)
        - checks (array with title, status, message)
        - do not include the formatting category in the checks array
        - give atleast 5 checks
        Resume:
        ${text}
      `,
    });

    // Cleanup
    fs.unlinkSync(filePath);

   res.status(200).json({result:result.object,
   });

  } catch (error) {
    console.error("This is console error ",error);
    res.status(500).json({ error: "Something went wrong" });
  }
});


export default ats;