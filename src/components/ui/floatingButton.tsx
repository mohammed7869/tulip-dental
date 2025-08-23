"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  X,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { apiService } from "@/lib/apiService";
import PhoneInput from "react-phone-input-2";

export default function FloatingTextForm() {
  const [open, setOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    // Bounce twice then stop
    const timer1 = setTimeout(() => setIsBouncing(false), 1200);
    const timer2 = setTimeout(() => setIsBouncing(true), 1600);
    const timer3 = setTimeout(() => setIsBouncing(false), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setPhoneNumber("");
    setMessage("");
    setSubmitStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!phoneNumber.trim()) {
      setSubmitStatus("error");
      setStatusMessage("Phone number is required.");
      return;
    }

    if (!message.trim()) {
      setSubmitStatus("error");
      setStatusMessage("Message is required.");
      return;
    }

    setSubmitStatus("loading");
    setStatusMessage("Sending your message...");

    const contactData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      phoneNumber: phoneNumber,
    };

    try {
      const result = await apiService.submitContactForm(contactData);

      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(
          result.message ||
            "Message sent successfully! We'll contact you shortly."
        );

        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
          setOpen(false);
        }, 3000);
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        error.message || "Failed to send message. Please try again."
      );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pb-[env(safe-area-inset-bottom)]">
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          if (!newOpen && submitStatus !== "loading") {
            resetForm();
          }
          setOpen(newOpen);
        }}
      >
        <DialogTrigger asChild>
          <button
            className={`w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isBouncing ? "animate-bounce" : ""
            }`}
            aria-label="Text us"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </DialogTrigger>

        <DialogContent className="max-w-md !px-0 !py-0 [&>button]:hidden">
          <DialogHeader className="bg-primary text-white px-6 py-4 rounded-t-lg">
            <h3 className="text-xl font-semibold">We'll Contact you</h3>
            <p className="text-sm mt-1">
              Enter your info and we'll call you shortly.
            </p>
            <DialogClose
              className="absolute right-4 top-4 text-white hover:text-gray-200 disabled:opacity-50"
              aria-label="Close"
              disabled={submitStatus === "loading"}
            >
              <X className="h-5 w-5" />
            </DialogClose>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Status Message */}
            {submitStatus !== "idle" && (
              <div
                className={`p-3 rounded-lg flex items-center gap-2 ${
                  submitStatus === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : submitStatus === "error"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : "bg-blue-50 text-blue-800 border border-blue-200"
                }`}
              >
                {submitStatus === "loading" && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                {submitStatus === "success" && (
                  <CheckCircle className="h-4 w-4" />
                )}
                {submitStatus === "error" && (
                  <AlertCircle className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{statusMessage}</span>
              </div>
            )}

            {/* Name and Email */}
            <div className="flex gap-2">
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Full Name *"
                disabled={submitStatus === "loading"}
              />
              {/* Email */}
              <Input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Email address *"
                disabled={submitStatus === "loading"}
              />
            </div>

            {/* Phone and Subject */}
            <div className="flex gap-2">
              {/* <div className="flex-1">
                <label className="block text-xs text-gray-600 mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label> */}
              <PhoneInput
                country={"us"}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                placeholder="Phone number *"
                inputStyle={{ width: "100%" }}
              />
              {/* </div> */}
              <Input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject *"
                disabled={submitStatus === "loading"}
              />
            </div>

            {/* Message */}
            {/* <div>
              <label className="block text-xs text-gray-600 mb-1">
                Message <span className="text-red-500">*</span>
              </label> */}
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your inquiry... *"
              className="resize-none"
              rows={3}
              disabled={submitStatus === "loading"}
            />
            {/* </div> */}

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 mt-2">
              By clicking Send, I agree to the{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms-and-conditions" className="underline">
                Terms of Use
              </a>
              , and I consent to receiving text messages from this practice
              acknowledging that data rates may apply. Message frequency varies.
            </p>

            <Button
              type="submit"
              className="w-full hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={submitStatus === "loading"}
            >
              {submitStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
