type Props = {
    children: React.ReactNode;
};
function AnchorNavItem({ children }: Props) {
    return (
        <a
            href="#main"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
        >
            {children}
        </a>
    );
}

export default AnchorNavItem;
