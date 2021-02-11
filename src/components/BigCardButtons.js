import React from 'react'
import Button from './Button'

function BigCardButtons () {
    return (
            <div class="col-lg-6 mb-4">						
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <Button />
                            <Button />
                            <Button />
                            <Button />
                            <Button />
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BigCardButtons;