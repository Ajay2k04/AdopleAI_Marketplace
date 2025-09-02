
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageSliderProps {
	images: { src: string; alt: string }[];
	theme: "dark" | "light";
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, theme }) => {
	const [index, setIndex] = useState(0);
	const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
	const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
	return (
		<div
			className={cn(
				"relative w-full flex flex-col items-center",
				theme === "dark" ? "bg-white/5 ring-white/10" : "bg-black/5 ring-black/10",
				"rounded-xl ring-1 py-4 px-2 md:py-6 md:px-4 mb-8"
			)}
			style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}
		>
			<div
				className="relative w-full mx-auto flex items-center justify-center"
				style={{ height: "500px", maxWidth: "1100px" }}
			>
				<button
					aria-label="Previous image"
					onClick={prev}
					className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
				>
					<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
						<path d="M15 19l-7-7 7-7" />
					</svg>
				</button>
				<img
					src={images[index].src}
					alt={images[index].alt}
					className="w-full h-full object-contain rounded-lg shadow-lg transition-all duration-300 bg-white dark:bg-black"
					style={{ objectFit: "contain", height: "100%", maxHeight: "700px", background: "inherit" }}
				/>
				<button
					aria-label="Next image"
					onClick={next}
					className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-10"
				>
					<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
						<path d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
			<div className="flex gap-2 mt-4">
				{images.map((img, i) => (
					<button
						key={img.src}
						className={cn(
							"w-3 h-3 rounded-full",
							i === index ? "bg-yellow-400" : "bg-gray-400/40"
						)}
						aria-label={`Go to image ${i + 1}`}
						onClick={() => setIndex(i)}
					/>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
