import { useLayoutEffect, useRef, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Map from "@components/Map/index";
import { MarkersProvider } from "@lib/context";

function App() {
    const ref = useRef<HTMLElement>(null);

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        if (ref?.current?.offsetWidth && ref?.current?.offsetHeight) {
            setWidth(ref.current.offsetWidth);
            setHeight(ref.current.offsetHeight);
        }
    }, []);
    return (
        <ChakraProvider>
            <MarkersProvider>
                <div className="root">
                    <nav></nav>
                    <div className="lateral"></div>
                    <div className="content" ref={ref}>
                        <Map style={{ width, height }} />
                    </div>
                </div>
            </MarkersProvider>
        </ChakraProvider>
    );
}

export default App;
