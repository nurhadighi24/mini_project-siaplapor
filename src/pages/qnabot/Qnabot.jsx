import OpenAI from "openai";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Qnabot() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "User akan memberikan pertanyaan tentang lingkungan sekitar, contohnya kemalingan, bencana alam, dan masalah sosial lainnya. Tugas kamu sebagai assistant akan memberikan jawaban yang terbaik.",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center  items-center gap-3 bg-white w-3/6 m-auto px-3 py-5"
      >
        <input
          placeholder="Insert Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="mt-1 px-3 py-2 bg-slate-950 border-2 border-custom-blue-1 shadow-sm w-full rounded-radius-20px text-white"
        />
        <Button
          className=" bg-custom-orange-1 px-8 font-extrabold rounded-radius-20px text-custom-blue-3 py-3 font-quicksand-font"
          label={isLoading ? <Loading /> : "Submit"}
          type="submit"
          disabled={isLoading}
        />
      </form>
      <div className="grow flex flex-col overflow-auto bg-custom-blue-3 h-screen px-3 py-5">
        {results.map((result) => (
          <p
            key={result.message.content}
            className={`border rounded-xl p-3 mb-4 w-fit bg-slate-800 text-white ${
              result.message.role === "assistant" ? "self-start" : "self-end"
            }`}
          >
            {result.message.content}
          </p>
        ))}
      </div>
    </>
  );
}
