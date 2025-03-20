try {
  (() => {
    var t = __REACT__,
      {
        Children: k,
        Component: P,
        Fragment: R,
        Profiler: w,
        PureComponent: L,
        StrictMode: E,
        Suspense: D,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: v,
        cloneElement: x,
        createContext: H,
        createElement: M,
        createFactory: U,
        createRef: F,
        forwardRef: N,
        isValidElement: G,
        lazy: W,
        memo: u,
        startTransition: K,
        unstable_act: Y,
        useCallback: d,
        useContext: q,
        useDebugValue: V,
        useDeferredValue: z,
        useEffect: p,
        useId: Z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: X,
        useMemo: $,
        useReducer: j,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__;
    var io = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: po,
        Provider: mo,
        RequestResponseError: So,
        addons: l,
        combineParameters: Co,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: Ao,
        eventMatchesShortcut: _o,
        eventToShortcut: bo,
        experimental_MockUniversalStore: go,
        experimental_UniversalStore: To,
        experimental_requestResponse: yo,
        experimental_useUniversalStore: Oo,
        isMacLike: Bo,
        isShortcutTaken: fo,
        keyToSymbol: ko,
        merge: Po,
        mockChannel: Ro,
        optionOrAltSymbol: wo,
        shortcutMatchesShortcut: Lo,
        shortcutToHumanString: Eo,
        types: m,
        useAddonState: Do,
        useArgTypes: vo,
        useArgs: xo,
        useChannel: Ho,
        useGlobalTypes: Mo,
        useGlobals: S,
        useParameter: Uo,
        useSharedState: Fo,
        useStoryPrepared: No,
        useStorybookApi: C,
        useStorybookState: Go,
      } = __STORYBOOK_API__;
    var Vo = __STORYBOOK_COMPONENTS__,
      {
        A: zo,
        ActionBar: Zo,
        AddonPanel: Jo,
        Badge: Qo,
        Bar: Xo,
        Blockquote: $o,
        Button: jo,
        ClipboardCode: on,
        Code: nn,
        DL: en,
        Div: cn,
        DocumentWrapper: tn,
        EmptyTabContent: rn,
        ErrorFormatter: In,
        FlexBar: an,
        Form: ln,
        H1: sn,
        H2: un,
        H3: dn,
        H4: pn,
        H5: mn,
        H6: Sn,
        HR: Cn,
        IconButton: h,
        IconButtonSkeleton: hn,
        Icons: An,
        Img: _n,
        LI: bn,
        Link: gn,
        ListItem: Tn,
        Loader: yn,
        Modal: On,
        OL: Bn,
        P: fn,
        Placeholder: kn,
        Pre: Pn,
        ProgressSpinner: Rn,
        ResetWrapper: wn,
        ScrollArea: Ln,
        Separator: En,
        Spaced: Dn,
        Span: vn,
        StorybookIcon: xn,
        StorybookLogo: Hn,
        Symbols: Mn,
        SyntaxHighlighter: Un,
        TT: Fn,
        TabBar: Nn,
        TabButton: Gn,
        TabWrapper: Wn,
        Table: Kn,
        Tabs: Yn,
        TabsState: qn,
        TooltipLinkList: Vn,
        TooltipMessage: zn,
        TooltipNote: Zn,
        UL: Jn,
        WithTooltip: Qn,
        WithTooltipPure: Xn,
        Zoom: $n,
        codeCommon: jn,
        components: oe,
        createCopyToClipboardFunction: ne,
        getStoryHref: ee,
        icons: ce,
        interleaveSeparators: te,
        nameSpaceClassNames: re,
        resetComponents: Ie,
        withReset: ae,
      } = __STORYBOOK_COMPONENTS__;
    var de = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: pe,
        AccessibilityIcon: me,
        AccessibilityIgnoredIcon: Se,
        AddIcon: Ce,
        AdminIcon: he,
        AlertAltIcon: Ae,
        AlertIcon: _e,
        AlignLeftIcon: be,
        AlignRightIcon: ge,
        AppleIcon: Te,
        ArrowBottomLeftIcon: ye,
        ArrowBottomRightIcon: Oe,
        ArrowDownIcon: Be,
        ArrowLeftIcon: fe,
        ArrowRightIcon: ke,
        ArrowSolidDownIcon: Pe,
        ArrowSolidLeftIcon: Re,
        ArrowSolidRightIcon: we,
        ArrowSolidUpIcon: Le,
        ArrowTopLeftIcon: Ee,
        ArrowTopRightIcon: De,
        ArrowUpIcon: ve,
        AzureDevOpsIcon: xe,
        BackIcon: He,
        BasketIcon: Me,
        BatchAcceptIcon: Ue,
        BatchDenyIcon: Fe,
        BeakerIcon: Ne,
        BellIcon: Ge,
        BitbucketIcon: We,
        BoldIcon: Ke,
        BookIcon: Ye,
        BookmarkHollowIcon: qe,
        BookmarkIcon: Ve,
        BottomBarIcon: ze,
        BottomBarToggleIcon: Ze,
        BoxIcon: Je,
        BranchIcon: Qe,
        BrowserIcon: Xe,
        ButtonIcon: $e,
        CPUIcon: je,
        CalendarIcon: oc,
        CameraIcon: nc,
        CameraStabilizeIcon: ec,
        CategoryIcon: cc,
        CertificateIcon: tc,
        ChangedIcon: rc,
        ChatIcon: Ic,
        CheckIcon: ac,
        ChevronDownIcon: lc,
        ChevronLeftIcon: ic,
        ChevronRightIcon: sc,
        ChevronSmallDownIcon: uc,
        ChevronSmallLeftIcon: dc,
        ChevronSmallRightIcon: pc,
        ChevronSmallUpIcon: mc,
        ChevronUpIcon: Sc,
        ChromaticIcon: Cc,
        ChromeIcon: hc,
        CircleHollowIcon: Ac,
        CircleIcon: _c,
        ClearIcon: bc,
        CloseAltIcon: gc,
        CloseIcon: Tc,
        CloudHollowIcon: yc,
        CloudIcon: Oc,
        CogIcon: Bc,
        CollapseIcon: fc,
        CommandIcon: kc,
        CommentAddIcon: Pc,
        CommentIcon: Rc,
        CommentsIcon: wc,
        CommitIcon: Lc,
        CompassIcon: Ec,
        ComponentDrivenIcon: Dc,
        ComponentIcon: vc,
        ContrastIcon: xc,
        ContrastIgnoredIcon: Hc,
        ControlsIcon: Mc,
        CopyIcon: Uc,
        CreditIcon: Fc,
        CrossIcon: Nc,
        DashboardIcon: Gc,
        DatabaseIcon: Wc,
        DeleteIcon: Kc,
        DiamondIcon: Yc,
        DirectionIcon: qc,
        DiscordIcon: Vc,
        DocChartIcon: zc,
        DocListIcon: Zc,
        DocumentIcon: Jc,
        DownloadIcon: Qc,
        DragIcon: Xc,
        EditIcon: $c,
        EllipsisIcon: jc,
        EmailIcon: ot,
        ExpandAltIcon: nt,
        ExpandIcon: et,
        EyeCloseIcon: ct,
        EyeIcon: tt,
        FaceHappyIcon: rt,
        FaceNeutralIcon: It,
        FaceSadIcon: at,
        FacebookIcon: lt,
        FailedIcon: it,
        FastForwardIcon: st,
        FigmaIcon: ut,
        FilterIcon: dt,
        FlagIcon: pt,
        FolderIcon: mt,
        FormIcon: St,
        GDriveIcon: Ct,
        GithubIcon: ht,
        GitlabIcon: At,
        GlobeIcon: _t,
        GoogleIcon: bt,
        GraphBarIcon: gt,
        GraphLineIcon: Tt,
        GraphqlIcon: yt,
        GridAltIcon: Ot,
        GridIcon: Bt,
        GrowIcon: ft,
        HeartHollowIcon: kt,
        HeartIcon: Pt,
        HomeIcon: Rt,
        HourglassIcon: wt,
        InfoIcon: Lt,
        ItalicIcon: Et,
        JumpToIcon: Dt,
        KeyIcon: vt,
        LightningIcon: xt,
        LightningOffIcon: Ht,
        LinkBrokenIcon: Mt,
        LinkIcon: Ut,
        LinkedinIcon: Ft,
        LinuxIcon: Nt,
        ListOrderedIcon: Gt,
        ListUnorderedIcon: Wt,
        LocationIcon: Kt,
        LockIcon: Yt,
        MarkdownIcon: qt,
        MarkupIcon: Vt,
        MediumIcon: zt,
        MemoryIcon: Zt,
        MenuIcon: Jt,
        MergeIcon: Qt,
        MirrorIcon: Xt,
        MobileIcon: $t,
        MoonIcon: jt,
        NutIcon: or,
        OutboxIcon: nr,
        OutlineIcon: A,
        PaintBrushIcon: er,
        PaperClipIcon: cr,
        ParagraphIcon: tr,
        PassedIcon: rr,
        PhoneIcon: Ir,
        PhotoDragIcon: ar,
        PhotoIcon: lr,
        PhotoStabilizeIcon: ir,
        PinAltIcon: sr,
        PinIcon: ur,
        PlayAllHollowIcon: dr,
        PlayBackIcon: pr,
        PlayHollowIcon: mr,
        PlayIcon: Sr,
        PlayNextIcon: Cr,
        PlusIcon: hr,
        PointerDefaultIcon: Ar,
        PointerHandIcon: _r,
        PowerIcon: br,
        PrintIcon: gr,
        ProceedIcon: Tr,
        ProfileIcon: yr,
        PullRequestIcon: Or,
        QuestionIcon: Br,
        RSSIcon: fr,
        RedirectIcon: kr,
        ReduxIcon: Pr,
        RefreshIcon: Rr,
        ReplyIcon: wr,
        RepoIcon: Lr,
        RequestChangeIcon: Er,
        RewindIcon: Dr,
        RulerIcon: vr,
        SaveIcon: xr,
        SearchIcon: Hr,
        ShareAltIcon: Mr,
        ShareIcon: Ur,
        ShieldIcon: Fr,
        SideBySideIcon: Nr,
        SidebarAltIcon: Gr,
        SidebarAltToggleIcon: Wr,
        SidebarIcon: Kr,
        SidebarToggleIcon: Yr,
        SpeakerIcon: qr,
        StackedIcon: Vr,
        StarHollowIcon: zr,
        StarIcon: Zr,
        StatusFailIcon: Jr,
        StatusIcon: Qr,
        StatusPassIcon: Xr,
        StatusWarnIcon: $r,
        StickerIcon: jr,
        StopAltHollowIcon: oI,
        StopAltIcon: nI,
        StopIcon: eI,
        StorybookIcon: cI,
        StructureIcon: tI,
        SubtractIcon: rI,
        SunIcon: II,
        SupportIcon: aI,
        SwitchAltIcon: lI,
        SyncIcon: iI,
        TabletIcon: sI,
        ThumbsUpIcon: uI,
        TimeIcon: dI,
        TimerIcon: pI,
        TransferIcon: mI,
        TrashIcon: SI,
        TwitterIcon: CI,
        TypeIcon: hI,
        UbuntuIcon: AI,
        UndoIcon: _I,
        UnfoldIcon: bI,
        UnlockIcon: gI,
        UnpinIcon: TI,
        UploadIcon: yI,
        UserAddIcon: OI,
        UserAltIcon: BI,
        UserIcon: fI,
        UsersIcon: kI,
        VSCodeIcon: PI,
        VerifiedIcon: RI,
        VideoIcon: wI,
        WandIcon: LI,
        WatchIcon: EI,
        WindowsIcon: DI,
        WrenchIcon: vI,
        XIcon: xI,
        YoutubeIcon: HI,
        ZoomIcon: MI,
        ZoomOutIcon: UI,
        ZoomResetIcon: FI,
        iconList: NI,
      } = __STORYBOOK_ICONS__;
    var i = "storybook/outline",
      _ = "outline",
      b = u(function () {
        let [c, r] = S(),
          s = C(),
          I = [!0, "true"].includes(c[_]),
          a = d(() => r({ [_]: !I }), [I]);
        return (
          p(() => {
            s.setAddonShortcut(i, {
              label: "Toggle Outline",
              defaultShortcut: ["alt", "O"],
              actionName: "outline",
              showInMenu: !1,
              action: a,
            });
          }, [a, s]),
          t.createElement(
            h,
            {
              key: "outline",
              active: I,
              title: "Apply outlines to the preview",
              onClick: a,
            },
            t.createElement(A, null),
          )
        );
      });
    l.register(i, () => {
      l.add(i, {
        title: "Outline",
        type: m.TOOL,
        match: ({ viewMode: c, tabId: r }) =>
          !!(c && c.match(/^(story|docs)$/)) && !r,
        render: () => t.createElement(b, null),
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
