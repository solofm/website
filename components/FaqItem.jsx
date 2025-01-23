"use client"

import PropTypes from 'prop-types';
import { Plus } from "lucide-react"
import { useState } from "react"

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-white transition-all duration-200 hover:shadow-md">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between p-6 text-left">
        <span className="text-lg font-medium">{question}</span>
        <Plus className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} />
      </button>
      <div className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="p-6 pt-0 text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

FaqItem.propTypes = {
  question: PropTypes.node.isRequired,
  answer: PropTypes.node.isRequired,
};

export default FaqItem;