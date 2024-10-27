const Shimmer = () => {
    return (
        <div className="w-4/5 mx-auto">
            <div className="flex justify-center gap-5 flex-wrap mt-14 items-center p-5">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between w-72 h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden relative my-5"
                    >
                        {/* Shimmer for image */}
                        <div className="w-full h-48 bg-gray-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full shimmer"></div>
                        </div>

                        {/* Shimmer for text content */}
                        <div className="w-full p-4">
                            <div className="w-full h-5 bg-gray-300 mb-2 rounded shimmer"></div>
                            <div className="w-4/5 h-5 bg-gray-300 mb-2 rounded shimmer"></div>
                            <div className="w-1/2 h-5 bg-gray-300 rounded shimmer"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;
