"use client";

export default function Button({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <button disabled={isLoading} type="submit">
      {children}
    </button>
  );
}
