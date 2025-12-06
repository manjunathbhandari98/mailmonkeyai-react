const Demo = () => {
  return (
    <div className="my-16 sm:my-24 md:px-4 max-w-6xl mx-auto">
      <div className="px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center tracking-tight">
          See the Magic in Action
        </h1>

        <h4 className="text-base sm:text-lg text-center mt-3 text-gray-500 max-w-xl mx-auto">
          Watch how MailMonkey AI transforms your ideas into polished,
          professional emails — instantly.
        </h4>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-8 
           bg-white p-5 sm:p-8 md:p-10 md:rounded-3xl md:shadow-md border border-gray-200"
      >
        <div>
          <h2 className="text-gray-600 text-lg font-semibold mb-4 sm:mb-6">
            Input
          </h2>

          <div className="space-y-6 md:bg-purple-50/50 p-5 sm:p-8 rounded-2xl">
            <div>
              <p className="text-gray-700 text-sm font-medium mb-1">
                Email Type
              </p>
              <div className="bg-gray-100 md:bg-white p-4 rounded-xl text-sm text-gray-700">
                Job Application
              </div>
            </div>

            <div>
              <p className="text-gray-700 text-sm font-medium mb-1">Tone</p>
              <div className="bg-gray-100 md:bg-white p-4 rounded-xl text-sm text-gray-700">
                Professional
              </div>
            </div>
            <div>
              <p className="text-gray-700 text-sm font-medium mb-1">
                Key Points
              </p>
              <div className="bg-gray-100 md:bg-white p-4 rounded-xl text-sm text-gray-700">
                <ul className="space-y-1 list-disc list-inside">
                  <li>5 years of experience</li>
                  <li>Led 3 successful projects</li>
                  <li>Excited about the role</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-gray-600 text-lg font-semibold mb-4 sm:mb-6">
            Generated Email
          </h2>

          <div className="bg-purple-50/70 p-5 sm:p-6 rounded-xl border border-purple-200 shadow-sm">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Dear Hiring Manager,</strong>
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mt-3">
              I am writing to express my strong interest in the position at your
              company. With five years of professional experience and a proven
              track record of leading three successful projects, I am confident
              in my ability to contribute meaningfully to your team.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mt-3">
              I am particularly excited about this opportunity and believe my
              skills align well with your requirements.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed mt-3">
              Best regards, <br />
              Your Name
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
