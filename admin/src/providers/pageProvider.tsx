import React, {ReactNode, useState} from 'react';

enum Pages {
    HOME = 'Hjem',
    INGREDIENT = 'Ingredienser'
}

const initPage = Pages.INGREDIENT

const PageContext = React.createContext<[Pages, Function]>([initPage, () => {}])

interface Props {
    children: ReactNode
}

const PageProvider = (props: Props) => {
    const [state, setState] = useState<Pages>(initPage);
    return (
        <PageContext.Provider value={[state, setState]}>
            {props.children}
        </PageContext.Provider>
    )
}

export { PageContext, PageProvider, Pages }