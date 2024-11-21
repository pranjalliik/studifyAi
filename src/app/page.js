'use client'
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import DashboardHeader from "./components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter()
  return (
    <div>
     <DashboardHeader/>
     <div className='bg-gray-100'>
     <div className="flex justify-center items-center  flex-col pt-10 pb-4">
        <h1 className="lg:text-4xl md:text-3xl xl:text-4xl text-xl lg:font-bold md:font-bold xl:font-bold font-semibold text-center "><span className="text-blue-500">
        Smart Study </span> <br/>Simplified: AI-Powered Tool for Your Learning Journey
        </h1>
        <div className=" lg:mt-3 md:mt-3 xl:mt-3 mt-2 lg:text-lg md:text-lg xl:text-lg  text-gray-600 text-center ">Effortlessly prepare for job exams and coding interviews with AI-powered study tools.<br/> Get chapter briefs, topic outlines, flashcards, and quizzes – all tailored to your success.</div>
     <Button className="bg-black text-white p-4 mt-6 font-bold text-lg bg-blue-500" onClick={()=>router.push('/dashboard')}>Get Started</Button>
     <Button className="bg-black text-white p-4 mt-3 font-bold text-lg px-10">Demo</Button>
 
  </div>
  </div>

  <section className="bg-gray-50 py-8">
  <div className="container mx-auto px-6 lg:px-20">
    <h2 className="text-3xl font-bold text-center text-gray-800 md:text-3xl">
      Why Choose  StudifyAI?
    </h2>
    <p className="text-lg text-center text-gray-600 mt-4">
      Unlock the Ultimate Learning Experience with AI
    </p>

    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-4xl text-pink-500 mb-4">
          📚
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Chapter Briefs</h3>
        <p className="text-gray-600 mt-2">
          Get concise, easy-to-understand summaries of chapters with a complete outline of topics to focus on.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-4xl text-pink-500 mb-4">
          💡
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Interactive Flashcards</h3>
        <p className="text-gray-600 mt-2">
          Retain concepts effortlessly with AI-generated flashcards designed for quick revisions.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-4xl text-pink-500 mb-4">
          ✅
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Customized Quizzes</h3>
        <p className="text-gray-600 mt-2">
          Test your knowledge with tailored quizzes that adapt to your learning pace and progress.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow">
        <div className="text-4xl text-pink-500 mb-4">
          🖥️
        </div>
        <h3 className="text-xl font-semibold text-gray-800">For Coders & Learners</h3>
        <p className="text-gray-600 mt-2">
          Prepare for technical interviews or master new skills with structured study material for coding and beyond.
        </p>
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-800 py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-xl font-semibold text-white ">
      Let's Connect
    </h2>
    <p className="text-gray-400 mt-2">
      Follow me on LinkedIn and GitHub to stay updated!
    </p>

    <div className="flex justify-center gap-6 mt-4">
      <a 
        href="https://www.linkedin.com/in/pranjali-kaushik-506554281/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-pink-500 text-2xl transition"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a 
        href="https://github.com/pranjalliik" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-300 hover:text-pink-500 text-2xl transition"
        aria-label="GitHub"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>

 {/*   <p className="text-gray-500 text-sm mt-6">
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </p> */}
  </div>
</footer>

    </div>
  );
}
