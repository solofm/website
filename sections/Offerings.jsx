"use client"

import PropTypes from 'prop-types';
import { CheckCircle, DollarSign } from "lucide-react"
import Image from "next/image"
import { Card } from "../components/Card"

export default function Offerings() {
  return (
    <div className="min-h-screen bg-pink-50/30 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-16 mt-16 text-center text-4xl font-medium tracking-tight text-p4 md:text-6xl">
          Our Offerings
        </h1>

        <div className="mx-auto max-w-5xl">
          {/* Container for responsive layout */}
          <div className="flex flex-col gap-8 lg:relative">
            {/* Social Media Icons - Stack on mobile, absolute on desktop */}
            <div className="flex justify-center gap-4 lg:absolute lg:left-0 lg:top-0 lg:flex-col">
              <div className="flex flex-row gap-4 lg:flex-col lg:gap-8">
                <IconCard icon="/images/twitch.svg" label="Twitch" color="bg-purple-500" />
                <IconCard icon="/images/youtube.svg" label="Youtube" color="bg-red-500" />
              </div>
            </div>

            <div className="flex justify-center gap-4 lg:absolute lg:left-48 lg:top-12 lg:flex-col">
              <div className="flex flex-row gap-4 lg:flex-col lg:gap-8">
                <IconCard icon="/images/tiktok.svg" label="TikTok" />
                <div className="flex flex-col items-center rounded-xl bg-white p-4 shadow-lg">
                  <DollarSign className="h-6 w-6 text-black" />
                  <p className="mt-2 text-xs">Paid Promo</p>
                </div>
                <IconCard icon="/images/reddit.svg" label="Reddit" color="bg-orange-500" />
              </div>
            </div>

            <div className="flex justify-center gap-4 lg:absolute lg:left-96 lg:top-24 lg:flex-col">
              <div className="flex flex-row gap-4 lg:flex-col lg:gap-8">
                <IconCard icon="/images/x.svg" label="Twitter" color="bg-blue-400" />
                <IconCard icon="/images/instagram.svg" label="Instagram" />
              </div>
            </div>

            {/* Payout Card - Full width on mobile, aligned right on desktop */}
            <div className="w-full lg:ml-auto lg:max-w-md">
              <Card>
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-pink-400" />
                  <div>
                    <h3 className="font-medium">Successful payout</h3>
                    <p className="text-sm text-slate-500">The money is on route to your bank!</p>
                  </div>
                </div>

                <div className="mb-4 rounded-lg bg-pink-50/50 p-3 text-sm">From December 2024 to January 2025</div>

                <div className="relative mb-4 h-32 w-full">
                  <div className="absolute bottom-0 left-0 h-24 w-full">
                    <div className="h-full w-full rounded-md bg-pink-100/50" />
                    <div
                      className="absolute bottom-0 left-0 h-full w-full"
                      style={{
                        background: "linear-gradient(to top right, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.4))",
                        clipPath: "polygon(0 100%, 100% 60%, 100% 100%, 0 100%)",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subscription</span>
                    <span>$12,782.93</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Messages</span>
                    <span>$40,832.27</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tips</span>
                    <span>$7,825.53</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function IconCard({ icon, label, color = "bg-white" }) {
  return (
    <div className={`flex flex-col items-center rounded-xl ${color} p-4 shadow-lg`}>
      <Image className="" src={icon || "/placeholder.svg"} alt={label} width={24} height={24} />
      <p className="mt-2 text-xs">{label}</p>
    </div>
  )
}

IconCard.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
};