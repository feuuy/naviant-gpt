"use client";

export default function Button({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className="bg-blue-500 rounded-full p-2"
    >
      {children}
    </button>
  );
}
