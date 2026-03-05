import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, ShieldCheck, Activity, Users } from "lucide-react";

export default function OrviaWebsite() {
  return (
    <div className="min-h-screen bg-blue-50 text-blue-950">
      <header className="p-6 shadow-md flex justify-between items-center bg-blue-100">
        <h1 className="text-2xl font-bold text-blue-700">Orvia</h1>
        <nav className="space-x-6 font-medium">
          <a href="#product" className="hover:text-blue-600">Product</a>
          <a href="#how" className="hover:text-blue-600">How It Works</a>
          <a href="#benefits" className="hover:text-blue-600">Benefits</a>
          <a href="#about" className="hover:text-blue-600">About JA</a>
        </nav>
      </header>

      <section className="text-center py-20 px-6 bg-gradient-to-b from-blue-100 to-blue-50">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">Orvia Hydration Indication Patch</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-blue-900">
          A simple wearable patch that changes colour to indicate hydration levels. Designed to help athletes, carers and everyday users recognise dehydration before it becomes dangerous.
        </p>
        <Button className="rounded-2xl px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700">Learn More</Button>
      </section>

      <section id="product" className="py-16 px-6 bg-blue-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl shadow bg-white">
            <CardContent className="p-6 text-center">
              <Droplets className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Sweat Detection</h3>
              <p>The patch absorbs sweat and reacts to moisture levels.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow bg-white">
            <CardContent className="p-6 text-center">
              <Activity className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Colour Indicator</h3>
              <p>A visible colour change shows when hydration levels drop.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow bg-white">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="font-semibold text-xl mb-2">Safe & Disposable</h3>
              <p>Comfortable, low cost, and designed for single use.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="how" className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">How It Works</h2>
          <p className="text-lg mb-6">
            The Orvia Hydration Indication Patch contains a small moisture-sensitive indicator layer. As the body sweats, the patch absorbs moisture and the indicator changes colour. This visual signal alerts the user that their hydration level may be dropping.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Card className="rounded-2xl shadow bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold">1. Wear</h3>
                <p>Apply the patch to the skin before activity.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold">2. Detect</h3>
                <p>The patch absorbs sweat and monitors moisture levels.</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold">3. Alert</h3>
                <p>The colour change alerts the user to drink water.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 px-6 bg-blue-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Who It's For</h2>
            <ul className="space-y-3 text-lg">
              <li>• Athletes and sports teams</li>
              <li>• Elderly individuals</li>
              <li>• Dementia patients</li>
              <li>• Outdoor workers</li>
              <li>• Children during physical activity</li>
            </ul>
          </div>

          <Card className="rounded-2xl shadow bg-white">
            <CardContent className="p-8">
              <Users className="mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-2">Simple Hydration Monitoring</h3>
              <p>
                Orvia aims to make hydration monitoring accessible and affordable. With a clear visual signal, anyone can understand when it's time to drink water.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 px-6 text-center bg-blue-50">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Created for Junior Achievement</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Orvia is a student innovation project developed as part of the Junior Achievement programme. The goal is to create practical solutions to real-world problems while learning entrepreneurship, product design, and teamwork.
        </p>
      </section>

      <footer className="bg-blue-900 text-white text-center p-6 mt-10">
        <p>© 2026 Orvia Student Innovation Project</p>
      </footer>
    </div>
  );
}
