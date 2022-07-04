
import React from "react";
import { connect } from "react-redux";

import Card from './Card';

const Media = props => {

    const { min, max } = props
    console.log(props.min)
    console.log(props.max)

    return (
        <Card title="Media dos numeros" green>

            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>

    )
}

function mapStateToProps(state) {
    return {

        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Media);