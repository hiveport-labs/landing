interface PillarCardProps {
  title: string;
  description: string;
}

export function PillarCard({ title, description }: PillarCardProps) {
  return (
    <div className="group">
      <div className="w-8 h-0.5 bg-orange mb-8 transition-all duration-300 group-hover:w-12" />
      <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-tight mb-4">
        {title}
      </h3>
      <p className="text-grey-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
