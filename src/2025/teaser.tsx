interface PortraitProps {
	image: string;
	name: string;
	title1: string;
	title2?: string;
}
export function Portrait(props: PortraitProps) {
	return (
		<div className="flex flex-col gap-4 items-center w-full">
			<img
				src={props.image}
				className="w-36 h-36 rounded-lg m-0"
				alt={props.name}
			/>
			<div className="flex flex-col rounded-lg">
				<div className="text-yellow-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-green-900 sm:drop-shadow-none self-center text-md font-bold">
					{props.name}
				</div>
				<div className="text-yellow-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-green-900 sm:drop-shadow-none self-center text-sm">
					{props.title1}
				</div>
				<div className="text-yellow-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] sm:text-green-900 sm:drop-shadow-none self-center text-xs">
					{props.title2}
				</div>
			</div>
		</div>
	);
}
