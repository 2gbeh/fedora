import Image from "next/image";

const IMAGE_SIZE = 120

export const SplashScreen = () => {
  return (
    <main className="flex-centered animate-pulse">
      <Image
        src="/logo.png"
        alt="Loading..."
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        priority
      />
    </main>
  );
};
