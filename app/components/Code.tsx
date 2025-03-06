import React from "react";

export default function Code() {
  return (
    <div className="text-center hero">
      <div className="mockup-code w-[80%] box-content">
        <div
          role="tablist"
          className="tabs bg-transparent text-red-200 tabs-lifted"
        >
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-neutral-500"
            aria-label="Fetch"
          />
          <div
            role="tabpanel"
            className="tab-content bg-transparent border-t-slate-100 rounded-box p-6 ml-7"
          >
            <pre data-prefix="1">
              <code>
                fetch(&apos;api-emulator.vercel.app/api/route/posts&apos;)
              </code>

              <code>.then(res =&gt; res.json())</code>

              <code>.then(data =&gt; console.log(data))</code>
            </pre>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-neutral-500"
            aria-label="Axios"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-transparent border-t-slate-100 p-6"
          >
            <pre data-prefix="1">
              <code>
                axios.get(&apos;api-emulator.vercel.app/api/route/posts&apos;)
              </code>

              <code>.then(res =&gt; res.json())</code>

              <code>.then(result =&gt; console.log(result.data))</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
