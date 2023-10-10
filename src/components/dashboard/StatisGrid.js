import React from 'react';
import { DASHBOARD_STATICS_GRIDS } from "../../constants/dashboard";

function StatisGrid(props) {
    return (
        <div className="flex gap-4 w-full">
            {DASHBOARD_STATICS_GRIDS.map((grid, index) => (
                <BoxWrapper key={index}>
                    <div className={`rounded-full h-12 w-12 flex items-center justify-center ${grid.bgIcon}`}>
                        { grid.icon }
                    </div>

                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">{grid.title}</span>
                        <div className="flex items-center ">
                            <strong className="text-xl text-gray-700 font-semibold">${grid.price}</strong>
                            <span className="text-sm text-green-500 pl-2">+{grid.increase}</span>
                        </div>
                    </div>
                </BoxWrapper>
            ))}
        </div>
    );
}

function BoxWrapper(props) { // children
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center" >{ props.children }</div>;
}

export default StatisGrid;