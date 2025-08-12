'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  // return (
  //   <section className="bg-primary text-white py-16">
  //     <div className="max-w-7xl mx-auto px-4">
  //       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
  //         <div className="flex-1">
  //           <h2 className="text-sm font-semibold uppercase tracking-wider mb-2">
  //             Newsletter
  //           </h2>
  //           <h3 className="text-3xl font-bold mb-4">
  //             Subscribe our Newsletter
  //           </h3>
  //         </div>
          
  //         <div className="flex-1 flex justify-end">
  //           <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md">
  //             <Input
  //               type="email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               placeholder="Enter Your email address"
  //               className="flex-1 bg-white text-primary placeholder:text-muted-foreground border-secondary"
  //               required
  //             />
  //             <Button 
  //               type="submit" 
  //               className="bg-secondary text-white hover:bg-secondary/80"
  //             >
  //               Subscribe
  //             </Button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
} 