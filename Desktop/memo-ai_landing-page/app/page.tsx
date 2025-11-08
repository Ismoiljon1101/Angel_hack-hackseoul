"use client"

import { Navbar } from "@/components/navbar"
import { TrustedCompanies } from "@/components/trusted-companies"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Zap, 
  Shield, 
  Download, 
  Star,
  Users,
  Play,
  CheckCircle2
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Social Proof */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border text-sm">
              <Users className="h-4 w-4" />
              <span>1000+ active users</span>
            </div>
            
            {/* Title/Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Transform Your Workflow with
              <span className="text-primary"> Intelligent Automation</span>
            </h1>
            
            {/* Problem Statement & Explanation */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Tired of repetitive tasks eating up your time? MemoAI automates your workflow, 
                giving you hours back every day to focus on what truly matters.
              </p>
              <p className="text-lg text-muted-foreground">
                Download our powerful desktop application and experience the future of productivity. 
                Works offline, syncs seamlessly, and integrates with all your favorite tools.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/memoai-dummy.zip'
                  link.download = 'memoai.zip'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Product Video/Screenshot Placeholder */}
          <div className="relative">
            <div className="aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Product video or screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Trusted By Section */}
      <TrustedCompanies />

      {/* Benefits Section - Bento Box Style */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focus on how it helps users instead of what features it has
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Save 10+ Hours Weekly</CardTitle>
              <CardDescription className="text-base">
                Automate repetitive tasks and focus on high-impact work that drives results.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>100% Secure</CardTitle>
              <CardDescription>
                Your data stays private with enterprise-grade encryption.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>AI-Powered</CardTitle>
              <CardDescription>
                Smart automation that learns and adapts to your workflow.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Works Everywhere</CardTitle>
              <CardDescription className="text-base">
                Offline-first design means you're never blocked. Sync when you're back online.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Team Ready</CardTitle>
              <CardDescription>
                Collaborate seamlessly with your team in real-time.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">How it works?</h2>
            <p className="text-lg text-muted-foreground">
              Get started in 3 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Download", desc: "Download and install MemoAI on your device. Available for Windows, Mac, and Linux." },
              { title: "Setup", desc: "Connect your tools and configure your workflows. Our wizard makes it easy." },
              { title: "Automate", desc: "Start automating tasks and watch your productivity soar. It's that simple!" },
            ].map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {step.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - 3 Tiers */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 md:overflow-visible">
          {/* Starter Plan */}
          <Card className="min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink flex flex-col">
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl">Starter</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$100</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Perfect for individuals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Up to 5 projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>5GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Mobile app access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan - Most Popular */}
          <Card className="min-w-[320px] md:min-w-0 flex-shrink-0 md:flex-shrink border-2 border-primary relative flex flex-col md:scale-105 md:z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                Most Popular
              </span>
            </div>
            <CardHeader className="flex-grow pt-6">
              <CardTitle className="text-2xl">Pro</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$200</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                Best for growing teams
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Everything in Starter plan +</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>100GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Team collaboration</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Advanced Plan */}
          <Card className="min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink flex flex-col">
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl">Advanced</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$300</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">
                For enterprises
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Everything in Pro plan +</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>24/7 phone support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/pricing">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about MemoAI
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">
                What platforms does MemoAI support?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                MemoAI is available for Windows, macOS, and Linux. You can download the appropriate version for your operating system from our website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Can I use MemoAI offline?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                Yes! MemoAI is designed to work offline-first. All your data is stored locally, and it will sync automatically when you're back online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                How does the free trial work?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                All plans include a 14-day free trial. No credit card required. You'll have full access to all features during the trial period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                Can I cancel my subscription anytime?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees or long-term commitments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Bottom */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to boost your productivity?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of users who are already saving hours every week with MemoAI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8"
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = '/memoai-dummy.zip'
                  link.download = 'memoai.zip'
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => {
                  window.location.href = '/download'
                }}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg">MemoAI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered automation for modern teams. Transform your workflow with intelligent automation.
              </p>
              <div className="flex gap-3">
                <a href="#" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">f</span>
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">t</span>
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <span className="text-xs">in</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
                <li><Link href="/how-it-works" className="hover:text-foreground transition-colors">How it works</Link></li>
                <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/download" className="hover:text-foreground transition-colors">Download</Link></li>
                <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 MemoAI. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
