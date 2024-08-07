import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import Alert from '@shared/Alert';
import { createPortal } from 'react-dom';

type AlertProps = ComponentProps<typeof Alert>;
type AlertOptions = Omit<AlertProps, 'open'>;

interface AlertContextValue {
  open: (options: AlertOptions) => void;
}

const Context = createContext<AlertContextValue | undefined>(undefined);

const defaultValues: AlertProps = {
  open: false,
  title: null,
  description: null,
  onButtonClick: () => {},
};

export function AlertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [alertState, setAlertState] = useState(defaultValues);

  // console.log('alertState ::', alertState);

  // portal로 띄우기
  const $portal_root = document.getElementById('root-portal');

  // 매번 새롭게 생길 필요가 없음

  /** 모달 close */
  const close = useCallback(() => {
    setAlertState(defaultValues);
  }, []);

  /** 모달 open */
  const open = useCallback(
    ({ onButtonClick, ...options }: AlertOptions) => {
      setAlertState({
        ...options,
        open: true,
        onButtonClick: () => {
          close();
          onButtonClick(); // 매개변수로 받은 onButton
        },
      });
    },
    [close],
  );

  const values = useMemo(() => ({ open }), [open]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Alert {...alertState} />, $portal_root)
        : null}
    </Context.Provider>
  );
}

export function useAlertContext() {
  const values = useContext(Context);

  if (values == null) {
    throw new Error('AlertContext 내부에서 사용해주세요');
  }

  return values;
}
