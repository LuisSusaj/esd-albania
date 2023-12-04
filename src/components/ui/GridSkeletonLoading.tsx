import { Grid, Skeleton } from "@chakra-ui/react";
type GridSkeletonLoadingProps = {
  templateColumns: object;
  maxW: string;
  minWidth?: string;
  gap: number;
  length: number;
  height: number;
};

const GridSkeletonLoading = (props: GridSkeletonLoadingProps) => {
  const { templateColumns, maxW, gap, length, height, minWidth } = props;
  return (
    <Grid templateColumns={templateColumns} maxW={maxW} gap={gap}>
      {Array.from({ length }).map((_, index) =>  (
          <Skeleton height={height} minW={minWidth} key={index} />
        ))}
    </Grid>
  );
};
export default GridSkeletonLoading;
