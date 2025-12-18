import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const sdkItems = [
  { title: "Swift SDK", icon: "/icon-swift-64x64-1.svg", alt: "Swift" },
  { title: "Kotlin SDK", icon: "/icon-kotlin-64x64-1.svg", alt: "Kotlin" },
  {
    title: "React Native SDK",
    icon: "/icon-react-native-64x64-1.svg",
    alt: "React Native",
  },
  { title: "Unity SDK", icon: "/icon-unity-64x64-1.svg", alt: "Unity" },
  { title: "Flutter SDK", icon: "/icon-flutter-64x64-1.svg", alt: "Flutter" },
  { title: "Capacitor SDK", icon: "/capacitor-logo.svg", alt: "Capacitor" },
  {
    title: "Kotlin Multiplatform",
    icon: "/kmp-logo.svg",
    alt: "Kotlin Multiplatform",
  },
  {
    title: "FlutterFlow",
    icon: "/icon-flutterflow-64x64-1.svg",
    alt: "FlutterFlow",
  },
  { title: "Web API", icon: "/web-api.svg", alt: "Web API" },
  { title: "Stripe", icon: "/icon-stripe-64x64-1.svg", alt: "Stripe" },
];

export default function SdkGridSection() {
  return (
    <Section className="bg-[#0f0d14] py-16 sm:py-20">
      <Container className="space-y-10 text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Установите SDK для своей платформы
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sdkItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-[#1f1a2d] bg-[#11101a] p-6 text-white shadow-[0_22px_70px_-45px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-[#2f2642]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,125,251,0.08),transparent_50%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col items-center gap-4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <p className="text-base font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
