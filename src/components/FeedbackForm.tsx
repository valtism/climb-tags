export function FeedbackForm() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Your Role:{" "}
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-1">
        <div className="px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Feedback
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Use this form to send feedback or request changes to the page.
          </p>
        </div>
      </div>
      <div className="col-span-2 mt-0">
        {/* @ts-expect-error netlify is a custom form attribute netlify uses for backend forms */}
        <form method="POST" netlify>
          <div className="overflow-hidden rounded-md shadow">
            <div className="space-y-6 bg-white p-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-rose-300 focus:outline-none focus:ring-1 focus:ring-rose-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-rose-300 focus:outline-none focus:ring-1 focus:ring-rose-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-1 text-sm shadow-sm focus:border-rose-300 focus:outline-none focus:ring-1 focus:ring-rose-300"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-right">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
