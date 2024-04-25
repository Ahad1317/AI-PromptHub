"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { use } from "react"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "bags", label: "Creative Writing" },
      { value: "belts", label: "Educational" },
      { value: "gloves", label: "Programming" },
      { value: "scarves", label: "Business" },
      { value: "wallets", label: "Health and wellness" },
    ],
  },
  {
    id: "size",
    name: "Level",
    options: [
      { value: "xs", label: "Beginner" },
      { value: "s", label: "Amateur" },
      { value: "m", label: "Intermediate" },
      { value: "l", label: "Professional" },
      { value: "xl", label: "Advance" },
      { value: "one-size", label: "Regular" },
    ],
  },
  {
    id: "color",
    name: "Audience",
    options: [
      { value: "black", label: "Individual" },
      { value: "blue", label: "Group" },
      { value: "brown", label: "Corporate" },
      { value: "green", label: "Third party" },
      { value: "yellow", label: "Buisness" },
    ],
  },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchValues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})`
                  : ""}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                     id ={`filter-${section.id}-${optionIdx}`} 
                     checked = {searchValues.some(([key, value]) => key === 
                      section.id && value === option.value)}
                     onClick={(event)=>{
                        const params = new URLSearchParams(searchParams)
                        const checked = event.currentTarget.dataset.state === "checked"
                        checked ? params.delete(section.id) : params.set(section.id, option.value)
                        router.replace(`/?${params.toString()}`)
                    }}
                    />
                    <label 
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                     {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
