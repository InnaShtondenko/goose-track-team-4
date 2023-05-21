import { SkeletonColumn, SkeletonColumnsList, SkeletonColumnsListWrapper } from "./LoaderForColumns.styled";

export default function LoaderForColumns() {
    return (
        <>
            <SkeletonColumnsListWrapper>
                <SkeletonColumnsList>
                    <SkeletonColumn />
                    <SkeletonColumn />
                    <SkeletonColumn />
                </SkeletonColumnsList>
            </SkeletonColumnsListWrapper>
        </>
    );
};