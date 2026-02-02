interface Props {
  page: string;
}

const ReportFooter = ({ page }: Props) => (
  <footer className="report-footer">{page}</footer>
);

export default ReportFooter;
