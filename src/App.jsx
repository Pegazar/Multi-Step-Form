import React from "react";
import MultiStepForm from "./components/pages/MultiStepForm";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#EEF5FF] py-0 lg:py-8 relative">
        <div className="bg-transparent lg:bg-white pl-0 lg:pl-4 py-0 lg:py-4 lg:rounded-xl w-full lg:w-auto lg:shadow-lg">
          <MultiStepForm />
        </div>
      </div>
    </>
  );
}

export default App;
