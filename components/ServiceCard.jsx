import Image from "next/image";
import Link from "next/link";
import { PHOTOS } from "@/lib/constants";

export default function ServiceCard({ category, delay = 0 }) {
  const img = PHOTOS[category.image] || PHOTOS.herbal;
  const minPrice = Math.min(...category.services.map((s) => s.price));

  return (
    <Link
      href={`/services#${category.id}`}
      className="animate-on-scroll card-hover group flex flex-col overflow-hidden rounded-xl3 border border-green-100 bg-white shadow-card focus-ring"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image src={img} alt={category.name} fill sizes="(min-width:1024px)360px,(min-width:640px)50vw,90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute bottom-3 left-4 text-3xl">{category.icon}</span>
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 font-mono text-xs font-700 text-green-700">
          from Rs.{minPrice}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-700 text-gray-900 group-hover:text-green-700 transition-colors">
          {category.name}
        </h3>
        <p className="mt-1.5 font-body text-xs leading-relaxed text-gray-500 flex-1">
          {category.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-body text-xs font-600 text-green-600">
            {category.services.length} treatment{category.services.length > 1 ? "s" : ""}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 font-body text-xs font-700 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
