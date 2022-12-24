import c from './PageNotFound.module.css';

const PageNotFound: React.FC = () => {
  return (
    <div className={c.notFoundWrapp}>
      <div>
        <p className={c.error}>404 Error</p>
        <p className={c.notFound}>Page not found</p>
      </div>
    </div>
  );
};

export default PageNotFound;
