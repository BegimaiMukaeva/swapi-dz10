import {Consumer} from "../swapi-context";

const withSwapi = (View, parserFunc) => {
    return (props) => {
        const component = (
            <Consumer>
                {(swapi) => {
                    const methods = parserFunc(swapi)
                    return <View {...methods} {...props}/>
                }}
            </Consumer>
        )
        return component;
    }
}
export default withSwapi;