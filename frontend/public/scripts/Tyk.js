function TypeFilter() {
    VideoFilter.classList.add('tyk');
    ChannelFilter.classList.remove('tyk');
    PlaylistFilter.classList.remove('tyk');
}
let classListA;
let classListB = 'tyk';
let ThisClassList;
function RemoveTyk() {
    document.querySelectorAll(classListA).forEach(element => {
        if (element.classList.contains(classListB) && !element.classList.contains(ThisClassList)) {
            element.classList.remove('tyk');
        }   
    });
}

LastHour.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'last-hour';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
Today.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'today';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
Week.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'week';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
Month.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'month';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
Year.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'year';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});

VideoFilter.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'video-filter';
    this.classList.toggle('tyk');
    if (!VideoFilter.classList.contains('tyk')) {
        RemoveTyk();
    }
    classListA = '.sort-list-type';
    RemoveTyk();
});
ChannelFilter.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'channel-filter';
    this.classList.toggle('tyk');
    if (ChannelFilter.classList.contains('tyk')) {
        RemoveTyk();
    }
    classListA = '.sort-list-type';
    RemoveTyk();
    classListA = '.sort-list-duration';
    RemoveTyk();
});
PlaylistFilter.addEventListener('click', function() {
    classListA = '.sort-list-date';
    ThisClassList = 'playlist-filter';
    this.classList.toggle('tyk');
    if (PlaylistFilter.classList.contains('tyk')) {
        RemoveTyk();
    }
    classListA = '.sort-list-type';
    RemoveTyk();
    classListA = '.sort-list-duration';
    RemoveTyk();
});

LessFiveMinutes.addEventListener('click', function() {
    classListA = '.sort-list-duration';
    ThisClassList = 'less-five-minutes';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
FiveTwentyMinutes.addEventListener('click', function() {
    classListA = '.sort-list-duration';
    ThisClassList = 'five-twenty-minutes';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});
MoreTwentyMinutes.addEventListener('click', function() {
    classListA = '.sort-list-duration';
    ThisClassList = 'more-twenty-minutes';
    TypeFilter();
    RemoveTyk();
    this.classList.toggle('tyk');
});

Relevance.addEventListener('click', function() {
    classListA = '.sort-by-list';
    ThisClassList = 'relevance';
    RemoveTyk();
    this.classList.add('tyk');
});
UploadDateFilter.addEventListener('click', function() {
    classListA = '.sort-by-list';
    ThisClassList = 'upload-date-filter';
    RemoveTyk();
    this.classList.add('tyk');
});
NumOfViews.addEventListener('click', function() {
    classListA = '.sort-by-list';
    ThisClassList = 'num-of-views';
    RemoveTyk();
    this.classList.add('tyk');
});
Rating.addEventListener('click', function() {
    classListA = '.sort-by-list';
    ThisClassList = 'rating';
    RemoveTyk();
    this.classList.add('tyk');
});