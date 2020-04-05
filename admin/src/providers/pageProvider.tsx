import React, {ReactNode, useState} from 'react';

enum Pages {
    HOME = 'Hjem',
    INGREDIENT = 'Ingredienser'
}

const initPage = Pages.HOME

const PageContext = React.createContext<[Pages, Function]>([initPage, () => {}])

interface Props {
    children: ReactNode
}

const PageProvider = (props: Props) => {
    const [state, setState] = useState<Pages>(Pages.HOME);
    return (
        <PageContext.Provider value={[state, setState]}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider, Pages }