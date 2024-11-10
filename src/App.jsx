import './App.css'

// function ImpressionTrackable(ChildComponent) {
//     // Define the new component inside the HOC
//     function WrappedComponent(props) {
//         console.log('ImpressionTrackable', props);

//         const handleUserClick = () => {
//             console.log('User clicked', ChildComponent.name);
//         }

//         const handleMouseEnter = () => {
//             console.log('Mouse entered', ChildComponent.name);
//         }

//         return (
//             <div onClick={handleUserClick} onMouseEnter={handleMouseEnter}>
//                 <ChildComponent {...props} />
//             </div>
//         );
//     }

//     return WrappedComponent;
// }

function ClickImpressionTracker(ChildComponent) {
    return function WrappedComponent(props) {
        const handleUserClick = function () {
            console.log('User clicked', ChildComponent.name);
        };

        return (
            <div onClick={handleUserClick}>
                <ChildComponent {...props} />
            </div>
        );
    };
}

function MouseEnterImpressionTracker(ChildComponent) {
    return function WrappedComponent(props) {
        const handleMouseEnter = function () {
            console.log('Mouse entered', ChildComponent.name);
        };

        return (
            <div onMouseEnter={handleMouseEnter}>
                <ChildComponent {...props} />
            </div>
        );
    };
}

function SimpleComponent({ x }) {
    return (
        <div>
            SimpleComponent {x}
        </div>
    );
}

const ImpressionTrackableSimpleComponent = MouseEnterImpressionTracker(ClickImpressionTracker(SimpleComponent));

function App() {
    return (
        <>
            Hello
            <hr />
            <ImpressionTrackableSimpleComponent x={10} />
        </>
    );
}

export default App;
