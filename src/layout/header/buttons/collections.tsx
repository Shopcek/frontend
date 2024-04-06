import { Collections as CollectionsIcon } from 'components/images/Icons'

export function Collections({ onClick }: any) {
    return (
        <div className="d-flex align-items-center nav-item" onClick={onClick}>
            <div className="collections">
                <CollectionsIcon className="hamburger icon" />
                <div>
                    <h6 className="text-primary">COLLECTIONS</h6>
                </div>
            </div>
        </div>
    )
}
