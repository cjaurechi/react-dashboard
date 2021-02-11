import React from 'react'
import THead from './THead'
import TFoot from './TFoot'
import TBody from './TBody'

function DataTales() {
    return(
        <div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <THead />
                        <TBody />
                        <TFoot />
                    </table>
				</div>
			</div>
		</div>
    )
}

export default DataTales;