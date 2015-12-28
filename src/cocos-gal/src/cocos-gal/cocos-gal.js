var CocosGal = {
    Tools: CocosGalTools,

    Atom: (function(){
        function Atom(atom_id){
            /**
             * @param {atom_id} Ids should be unique in a scene
             * @param {atom_type} 0 = Text, 1 = Select.
             * @param {atom_role} Role name displayed
             * @param {atom_text} Text displayed
             * @param {atom_selections} Array of selections, selection example
             * {
             *  text:'selection',
             *  nextChapter:'Chapter_id',
             *  nextScene: 'Scene_id',
             *  nextAtom: 'Atom_id',
             *  nextScript: "alert('Hello World')"
             * }
             *
             * @param {atom_background} The background (Optional)
             * @param {atom_imgs} The array of role images (Optional)
             * @param {atom_bgm} The background melody (Optional)
             */
            this.atom_id = atom_id;
            this.atom_type = null;
            this.atom_role = null;
            this.atom_text = null;
            this.atom_selections = [];
            this.atom_background = null;
            this.atom_imgs = [];
            this.atom_bgm = null;
        }
        return Atom;
    })(),

    Scene: (function () {
        function Scene(scene_id){
            /**
             * @param {scene_id} Ids should be unique in a chapter
             * @param {scene_atoms} Set of atoms
             * @param {scene_background} The background (Optional)
             * @param {scene_bgm} The background melody (Optional)
             */
            this.scene_id = scene_id;
            this.scene_atoms = [];
            this.scene_background = null;
            this.scene_bgm = null;
        }
        function getScene(){
            var GalLayer = cc.Layer.extend({
                sprite:null,
                ctor:function () {
                    this._super();
                    var size = cc.winSize;
                    var mainscene = ccs.load(res.MainScene_json);
                    this.addChild(mainscene.node);
                    return true;
                }
            });
            return cc.Scene.extend({
                onEnter:function () {
                    this._super();
                    var layer = new HelloWorldLayer();
                    this.addChild(layer);
                }
            });
        }
        return Scene;
    })(),

    Chapter: (function (){
        function Chapter(chapter_id){
            /**
             * @param {chapter_id} Ids should be unique in a game
             * @param {chapter_scenes} Set of scenes
             */
            this.chapter_id = chapter_id;
            this.chapter_scenes = [];
        }
        return Chapter;
    })(),

    Game: {
        /**
         * @param {game_chapters} Set of atoms
         * @param {game_progress} Hash of progress
         * @param {game_variables} Hash of global variables
         */
        game_chapters: [],
        game_progress: {
            now_chapter: null,
            now_scene: null,
            now_atom: null
        },
        game_variables: {}
    }
};
