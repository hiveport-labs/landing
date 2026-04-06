import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 md:py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          {/* Brand */}
          <Image
            src="/logo.png"
            alt="Hiveport"
            width={484}
            height={105}
            className="h-6 md:h-7 w-auto invert"
          />

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 text-xs tracking-[0.15em] uppercase">
            <div className="space-y-4">
              <p className="text-grey-400 mb-2">Projects</p>
              <a href="#" className="block text-grey-400 hover:text-white transition-colors">
                Communication
              </a>
              <a href="#" className="block text-grey-400 hover:text-white transition-colors">
                Data
              </a>
              <a href="#" className="block text-grey-400 hover:text-white transition-colors">
                Education
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-grey-400 mb-2">Open Source</p>
              <a
                href="https://github.com/hiveport-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-grey-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-grey-400 mb-2">Contact</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-grey-800">
          <p className="text-grey-600 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Hiveport Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
