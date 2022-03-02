// import { useEffect } from "react";
// import { useNavigate } from "react-router";

// export const withRouter = (Component) => {
//     const Wrapper = (props) => {
//         const history = useNavigate();

//         return <Component history={history} {...props} />;
//     };

//     return Wrapper;
// };

// function ScrollToTop({ history }) {
//     useEffect(() => {
//         const unlisten = history.listen(() => {
//             window.scrollTo(0, 0);
//         });
//         return () => {
//             unlisten();
//         };
//     }, []);

//     return null;
// }

// export default withRouter(ScrollToTop);
