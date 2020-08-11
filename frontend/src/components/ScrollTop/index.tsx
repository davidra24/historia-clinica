import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { usePrevious } from '../../hooks/usePrevious';

export const ScrollToTop = (props: any) => {
  const prevProps: any = usePrevious(props);

  useEffect(() => {
    if (props.location !== prevProps?.location) {
      window.scrollTo(0, 0);
    }
  }, [prevProps]);

  return props.children;
};

export default withRouter(ScrollToTop);
