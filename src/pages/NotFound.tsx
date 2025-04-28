
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-vmr-blue">
        <div className="text-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">404</h1>
          <div className="w-16 h-1 bg-vmr-cyan mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8">Oops! The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
