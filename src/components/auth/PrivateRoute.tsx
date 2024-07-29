import useUser from '@/hooks/auth/useUser';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();
  const location = useLocation();
  if (user == null) {
    return <Navigate to="/signin" replace={true} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
