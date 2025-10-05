"use client";

export default function ActivatePage() {
  return (
    <div className="relative h-screen w-full overflow-auto bg-gray-50">
      {/* Hero Section with City Background */}
      <div className="relative h-80 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/30 to-pink-50/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-center text-7xl font-bold tracking-tight">
            <span className="text-[#1e3a5f]">ax</span>
            <span className="text-[#ef4444]">ii</span>
            <span className="text-[#1e3a5f]">s</span>
          </h1>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d5a8f] px-8 py-5">
        <h2 className="text-xl font-semibold text-white">Welcome to Bay Adelaide Centre</h2>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-8 p-8">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-12 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 rounded-full bg-blue-50 p-4">
            <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Contact</h3>
          <p className="text-sm text-gray-600">Our Team</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-12 shadow-sm transition-all hover:shadow-md">
          <div className="mb-4 rounded-full bg-blue-50 p-4">
            <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>
          </div>
          <h3 className="mb-1 text-lg font-semibold text-gray-900">Service</h3>
          <p className="text-sm text-gray-600">Requests</p>
        </div>
      </div>

      {/* Events Section */}
      <div className="px-8 pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">Happening at Bay Adelaide Centre</h2>
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All
          </button>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Hollywood Event */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
            <div className="h-48 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500" />
            <div className="p-4">
              <p className="mb-1 text-xs text-gray-500">Wednesday, September 10 at 1:00 PM</p>
              <h3 className="text-sm font-semibold text-gray-900">Hollywood in Toronto</h3>
            </div>
          </div>

          {/* Summer Sounds */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
            <div className="h-48 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" />
            <div className="p-4">
              <p className="mb-1 text-xs text-gray-500">Thursdays at 12:00 PM</p>
              <h3 className="text-sm font-semibold text-gray-900">Summer Sounds</h3>
            </div>
          </div>

          {/* Almonds Article */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop')`,
              }}
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900">Almonds aren't the only culprit</h3>
            </div>
          </div>

          {/* Wellness Sessions */}
          <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop')`,
              }}
            />
            <div className="p-4">
              <p className="mb-1 text-xs text-gray-500">September 2025</p>
              <h3 className="text-sm font-semibold text-gray-900">Weekly Wellness Sessions</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Catering Card */}
      <div className="px-8 pb-8">
        <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
          <div className="flex h-full">
            <div
              className="h-64 w-1/2 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop')`,
              }}
            />
            <div className="flex w-1/2 flex-col justify-center p-8">
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">Catering made simple</h3>
              <p className="text-gray-600">Food ordering services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}