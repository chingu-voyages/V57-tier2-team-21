import  PageTitle from './components/PageTitle'
import StatusBar from './components/DashStatus'
import SearchBar from './components/SearchBar'
import StatusSlide from './components/StatusSlide'

export default function Home() {
  return (
    <div className="bg-white">
      <PageTitle />
      <StatusBar />
      <SearchBar />
      <StatusSlide />
    </div>
  );
}
