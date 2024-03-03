// import React, { ComponentType } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface AuthProps {
//   isAuthenticated: boolean;
// }

// const requireAuth = <P extends AuthProps>(
//   WrappedComponent: ComponentType<P>
// ): React.FC<Omit<P, keyof AuthProps>> => {
//   const AuthComponent: React.FC<Omit<P, keyof AuthProps>> = (props) => {
//     const { isAuthenticated, ...rest } = props as P & AuthProps;
//     const navigate = useNavigate();

//     if (!isAuthenticated) {
//       navigate('/');
//       return null; 
//     }

//     return <WrappedComponent {...rest as P} />;
//   };

//   return AuthComponent;
// };

// export default requireAuth;
