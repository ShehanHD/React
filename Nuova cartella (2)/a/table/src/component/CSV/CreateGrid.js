import React from 'react'
import DataGrid, { Pager, Paging, Editing, Popup, Position } from 'devextreme-react/data-grid';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

export default function CreateGrid( {rows}, {columns} ) {
console.log(rows);
    return (
        <>
            <DataGrid
                    dataSource={rows}
                    defaultColumns={columns}
                    showBorders={true}
                    >
                    <Paging defaultPageSize={10} />

                    <Editing
                        mode="row"
                        allowUpdating={true}
                        allowDeleting={true}
                        useIcons={true}
                    />

                    <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20, 50]}
                    showInfo={true} />
                    
                </DataGrid>
        </>
    )
}
