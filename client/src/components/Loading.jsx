const Loading = () => {
  return (
    <div
      role="status"
      aria-label="Loading your account"
      className="flex h-screen items-center justify-center bg-white"
    >
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-zinc-200 border-t-zinc-950" />
    </div>
  );
};

export default Loading;
